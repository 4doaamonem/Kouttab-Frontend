
const Introduction = ({
  label,
  title,
  description,
  className,
  labelClassName,
  contentClassName
}: {
  label: string;
  title?: string;
  description?: string;
  className?: string;
  labelClassName?: string;
  contentClassName?: string;
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className={`flex items-center gap-2 mb-1 justify-center ${labelClassName}`}>
        <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent  "></span>
        <span className=" text-secondary-normal  font-medium text-sm md:text-lg  ">
          {label}{" "}
        </span>
      </div>
      {title && description && (
        <div className = {`${contentClassName}`}>
          <h3 className="font-medium text-text-primary-normal mb-2 text-2xl md:text-[28px]">
            {title}{" "}
          </h3>
          <p className="text-sm md:text-lg font-medium text-text-secondary-normal">
            {description}{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Introduction;
