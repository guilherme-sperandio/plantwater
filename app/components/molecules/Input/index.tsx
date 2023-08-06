import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
} & ComponentPropsWithoutRef<"input">;

const InputStyled = (
  { label, placeholder, ...rest }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="flex flex-col w-full mb-4">
      {label && (
        <label className="text-base pl-1 text-black" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className="h-10 border-2 border-solid border-grayLight rounded pl-3"
        ref={ref}
        aria-label={label}
        placeholder={placeholder}
        type="text"
        {...rest}
      />
    </div>
  );
};

export const Input = forwardRef(InputStyled);
