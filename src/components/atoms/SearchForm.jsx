"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuFilter, LuSearch } from "react-icons/lu";
import * as Yup from "yup";
import { twMerge } from "tailwind-merge";

const SearchForm = ({className}) => {  
  const validationSchema = Yup.object().shape({
    query: Yup.string().required("Search query is required"),
  });

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    // Your submit logic here
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge(`bg-background shadow-shadow flex w-[700px] items-center gap-2 rounded-full p-2 shadow-xl ${className}`)}
    >
      <LuSearch className="text-text-lite/70 ml-4 h-[20px] w-[20px]" />
      
      <input
        {...register("query")}
        placeholder="Search by make, model, or features"
        className="border-none focus:ring-0 focus:outline-none px-4 py-3 w-full text-lg placeholder:text-text-lite/70"
      />
      {errors.query && <p className="text-red-500">{errors.query.message}</p>}

      <hr className="border-text-lite/50 h-[25px] border border-dashed" />

      <LuFilter className="text-text-lite/70 ms-1 me-5 text-xl" />

      <button
        type="submit"
        className="hidden rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;