import React, { useState } from "react";
import { uploadImage } from "src/api/uploader/Uploader";
import Button from "src/components/button";
import useProducts from "src/hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      console.log(files);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("successfully uploaded!");
              setTimeout(() => setSuccess(null), 5000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };
  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold py-5">New Product Registration Form</h2>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="local file"
          width={400}
          className="mx-auto"
        />
      )}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="Product name"
          onChange={handleChange}
          required
        />
        <div className="flex items-center gap-3 w-full">
          <span>$</span>
          <div className="flex items-center w-full">
            <input
              type="number"
              name="price"
              value={product.price ?? ""}
              placeholder="price"
              onChange={handleChange}
              className="w-full"
              required
            />
            <span className="pl-1">dollars</span>
          </div>
        </div>
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="category"
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="describe the product here..."
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="S, M, L"
          onChange={handleChange}
          required
        />
        <Button
          text={isUploading ? "Uploading..." : "Register New Product"}
          disabled={isUploading}
        />
      </form>
      {success && <p>{success} ✅</p>}
    </section>
  );
}
