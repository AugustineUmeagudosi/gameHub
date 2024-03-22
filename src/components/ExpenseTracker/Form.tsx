import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be atleast 3 characters long" }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1, { message: "Amount must be greater than 0" }),
  category: z.enum(["Groceries", "Utilities", "Entertainment"]),
});

export type FormData = z.infer<typeof schema>;
export interface FormProps {
  shoppingList: FormData[] | undefined;
  setShoppingList: Dispatch<SetStateAction<FormData[] | undefined>>;
}

export const Form = ({ shoppingList, setShoppingList }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onFormSubmit = (data: FormData) => {
    shoppingList?.length
      ? setShoppingList([...shoppingList, data])
      : setShoppingList([data]);
    return reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>

          <input
            {...register("description")}
            id="name"
            type="text"
            className="form-control"
          />

          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>

          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />

          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>

          <select
            className="form-select"
            aria-label="category"
            {...register("category")}
            id="category"
          >
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>

          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
