import React from "react";

const ProjectDetails = ({
  title,
  tags = [],
  description,
  subDescription = [],
  href,
  image,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10">
        <button
          onClick={onClose}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="/logos/close.svg" alt="" className="w-6 h-6" />
        </button>
        <img src={image} alt="" className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="font-normal mb-3 text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="font-normal mb-3 text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div>
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="inline-block mr-2 rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
