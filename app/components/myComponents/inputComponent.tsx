import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputComponentProps {
  label: string
  name: string
  register: UseFormRegisterReturn
  error?: FieldError
  type?: string
  placeholder: string
  className?: string;
}

export default function InputComponent({label,name,placeholder,register,className,error,type}:InputComponentProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Label htmlFor={name} className="text-sm font-medium">
          {label}
        </Label>
        {error && (
          <span className="text-xs text-red-500 font-medium">
            {error.message}
          </span>
        )}
      </div>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
        className={className}
      />
    </div>
  );
}
