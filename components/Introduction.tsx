import React from "react";

const Introduction = ({
  label,
  title,
  description,
}: {
  label: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div className="text-center">
      <div className="flex items-center  justify-center gap-2 mb-1">
        <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent  "></span>
        <span className=" text-secondary-normal  font-medium text-sm md:text-lg  ">
          {label}{" "}
        </span>
      </div>
      {title && description && (
        <>
          <h3 className="font-medium text-text-primary-normal text-2xl md:text-[28px]">
            {title}{" "}
          </h3>
          <p className="text-sm md:text-lg font-medium text-text-secondary-normal">
            {description}{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default Introduction;
