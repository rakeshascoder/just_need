import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabaseCreateClient";
import Loader from "../Components/Common/Loader";

const serviceProvider = createContext();
export const useServiceContext = () => useContext(serviceProvider);

function ServiceContext({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategoriesWithSubcategories();
  }, []);

  async function getCategoriesWithSubcategories() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("catview").select("*");
      if (error)
        throw new Error(`Failed to fetch categories: ${error.message}`);

      const formattedData = data.map((category) => ({
        ...category,
        subcategory: category.subcategory ?? [],
      }));

      setCategories(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  }

  const addCategoriesSubCategories = async (
    categoryName,
    subCategories,
    categoryImage
  ) => {
    setLoading(true);
    try {
      let imageUrl = null;

      if (categoryImage) {
        console.log("Uploading image:", categoryImage.name);
        const fileExt = categoryImage.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `categoriesImage/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("just_need")
          .upload(filePath, categoryImage, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          console.error("Image upload failed:", uploadError.message);
          throw uploadError;
        }

        const { data: urlData } = supabase.storage
          .from("just_need")
          .getPublicUrl(filePath);
        if (!urlData?.publicUrl) throw new Error("Public URL not retrieved");

        imageUrl = urlData.publicUrl;
        console.log("Image URL:", imageUrl);
      } else {
        console.log("No image provided for upload");
      }

      const { data: category, error: categoryError } = await supabase
        .from("categories")
        .insert([
          {
            categoryName,
            isActive: true,
            featured: false,
            image: imageUrl,
            metadatas: {
              totalListings: 0,
              averageRating: 0,
              totalFavorites: 0,
              tags: [],
            },
          },
        ])
        .select()
        .single();

      if (categoryError) {
        console.error("Category insertion failed:", categoryError.message);
        throw categoryError;
      }
      if (!category) throw new Error("Category insertion returned no data");

      console.log("Category inserted:", category);

      if (!subCategories?.length) {
        setCategories((prevCategories) => [
          ...prevCategories,
          { ...category, subcategory: [] },
        ]);
        setLoading(false);
        return;
      }

      const subcategoryData = subCategories.map((name) => ({
        catId: category.id,
        categoryName: name?.categoryName ?? name,
        description: name?.description ?? "",
        isActive: name?.isActive ?? false,
        createdAt: name?.createdAt ?? Date.now(),
      }));

      const { data: insertedSubcategories, error: subCategoryError } =
        await supabase.from("subcategories").insert(subcategoryData).select();

      if (subCategoryError) {
        console.error(
          "Subcategory insertion failed:",
          subCategoryError.message
        );
        throw subCategoryError;
      }

      setCategories((prevCategories) => [
        ...prevCategories,
        { ...category, subcategory: insertedSubcategories },
      ]);
    } catch (error) {
      console.error("Error in addCategoriesSubCategories:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  async function addSubcategory(categoryId, subcategoryName, imageFile) {
    setLoading(true);
    try {
      let imageUrl = null;

      if (imageFile) {
        const fileName = `subcategoryImages/${Date.now()}-${imageFile.name}`;
        const { data: imageData, error: imageError } = await supabase.storage
          .from("just_need")
          .upload(fileName, imageFile);

        if (imageError) {
          console.error("Error uploading image:", imageError.message);
          throw imageError;
        }

        const { data: publicUrlData } = supabase.storage
          .from("just_need")
          .getPublicUrl(imageData.path);
        imageUrl = publicUrlData.publicUrl;
      }

      const { data, error } = await supabase
        .from("subcategories")
        .insert([
          {
            catId: categoryId,
            categoryName: subcategoryName,
            isActive: true,
            createdAt: Date.now(),
            image: imageUrl,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Error inserting subcategory:", error.message);
        throw error;
      }

      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === categoryId
            ? { ...cat, subcategory: [...(cat.subcategory || []), data] }
            : cat
        )
      );

      return data;
    } catch (error) {
      console.error("Error adding subcategory:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function updateSubcategoryName(subcategoryId, updatedData, imageFile) {
    setLoading(true);
    try {
      let imageUrl = updatedData.image;

      if (imageFile) {
        const fileName = `subcategory-images/${Date.now()}-${imageFile.name}`;
        const { data: imageData, error: imageError } = await supabase.storage
          .from("just_need")
          .upload(fileName, imageFile, { upsert: true });

        if (imageError) {
          console.error("Error uploading image:", imageError.message);
          throw imageError;
        }

        const { data: publicUrlData } = supabase.storage
          .from("just_need")
          .getPublicUrl(imageData.path);
        imageUrl = publicUrlData.publicUrl;
      }

      const { data, error } = await supabase
        .from("subcategories")
        .update({
          ...updatedData,
          image: imageUrl,
          updatedAt: Date.now(),
        })
        .eq("id", subcategoryId)
        .select()
        .single();

      if (error) {
        console.error("Error updating subcategory:", error.message);
        throw error;
      }

      setCategories((prevCategories) =>
        prevCategories.map((cat) => ({
          ...cat,
          subcategory: cat.subcategory.map((sub) =>
            sub.id === subcategoryId ? { ...sub, ...data } : sub
          ),
        }))
      );

      return data;
    } catch (error) {
      console.error("Error updating subcategory:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const updateCategoryName = async (categoryId, newName, imageFile) => {
    setLoading(true);
    try {
      let imageUrl = null;

      // If a new image is provided, upload it
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `categoriesImage/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("just_need")
          .upload(filePath, imageFile, { cacheControl: "3600", upsert: false });

        if (uploadError) {
          console.error("Image upload failed:", uploadError.message);
          throw new Error(`Image upload failed: ${uploadError.message}`);
        }

        const { data: urlData } = supabase.storage
          .from("just_need")
          .getPublicUrl(filePath);
        if (!urlData?.publicUrl) {
          console.error("Failed to retrieve public URL for image:", filePath);
          throw new Error("Public URL not retrieved");
        }

        imageUrl = urlData.publicUrl;
        console.log("Updated Image URL:", imageUrl);
      }

      // Prepare the update object
      const updateData = { categoryName: newName };
      if (imageUrl) updateData.image = imageUrl; // Only update image if a new one is provided

      const { data, error } = await supabase
        .from("categories")
        .update(updateData)
        .eq("id", categoryId)
        .select()
        .single();

      if (error) {
        console.error("Error updating category:", error.message);
        throw new Error(`Category update failed: ${error.message}`);
      }

      setCategories((prev) =>
        prev.map((cat) => (cat.id === categoryId ? { ...cat, ...data } : cat))
      );
      return true;
    } catch (error) {
      console.error("Error in updateCategoryName:", error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const toggleCategoryStatus = async (categoryId, newStatus) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from("categories")
        .update({ isActive: newStatus })
        .eq("id", categoryId);

      if (error)
        throw new Error(`Toggle category status failed: ${error.message}`);

      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === categoryId ? { ...cat, isActive: newStatus } : cat
        )
      );
      return true;
    } catch (error) {
      console.error("Error toggling category status:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const toggleSubcategoryStatus = async (subcategoryId, newStatus) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from("subcategories")
        .update({ isActive: newStatus })
        .eq("id", subcategoryId);

      if (error)
        throw new Error(`Toggle subcategory status failed: ${error.message}`);

      setCategories((prevCategories) =>
        prevCategories.map((category) => ({
          ...category,
          subcategory: category.subcategory.map((sub) =>
            sub.id === subcategoryId ? { ...sub, isActive: newStatus } : sub
          ),
        }))
      );
      return true;
    } catch (error) {
      console.error("Error toggling subcategory status:", error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubCategory = async (subCategoryId) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from("subcategories")
        .delete()
        .eq("id", subCategoryId);
      if (error)
        throw new Error(`Subcategory deletion failed: ${error.message}`);

      setCategories((prevCategories) =>
        prevCategories.map((category) => ({
          ...category,
          subcategory: category.subcategory.filter(
            (sub) => sub.id !== subCategoryId
          ),
        }))
      );
    } catch (error) {
      console.error("Error deleting subcategory:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditSubCategory = async (subCategoryId, updatedName) => {
    setLoading(true);
    if (!subCategoryId) {
      console.error("Error: subCategoryId is undefined or invalid");
      return;
    }
    try {
      const { error } = await supabase
        .from("subcategories")
        .update({ categoryName: updatedName })
        .eq("id", subCategoryId);

      if (error) throw new Error(`Subcategory edit failed: ${error.message}`);

      setCategories((prevCategories) =>
        prevCategories.map((category) => ({
          ...category,
          subcategory: category.subcategory.map((sub) =>
            sub.id === subCategoryId
              ? { ...sub, categoryName: updatedName }
              : sub
          ),
        }))
      );
    } catch (error) {
      console.error("Error updating subcategory:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <serviceProvider.Provider
      value={{
        categories,
        addCategoriesSubCategories,
        updateSubcategoryName,
        toggleSubcategoryStatus,
        handleEditSubCategory,
        handleDeleteSubCategory,
        getCategoriesWithSubcategories,
        updateCategoryName,
        toggleCategoryStatus,
        addSubcategory,
      }}
    >
      {children}
      {/* {loading && <Loader />} */}
    </serviceProvider.Provider>
  );
}

export default ServiceContext;
