"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface PasswordInputProps {
  register: UseFormRegisterReturn;        // register("password") ou register("confirmPassword")
  error?: FieldError;
  label: string;
  name: string;
  placeholder?: string;
}

export default function InputPassword({
  register,
  error,
  label,
  name,
  placeholder = "Digite sua senha",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

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

      <div className="relative">
        <Input
          id={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register}
          className="h-10 pr-10"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}