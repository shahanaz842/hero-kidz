const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="skeleton h-[420px] w-full rounded-xl"></div>

        {/* Info */}
        <div className="space-y-4">
          <div className="skeleton h-6 w-3/4"></div>
          <div className="skeleton h-4 w-1/2"></div>

          <div className="flex gap-3">
            <div className="skeleton h-4 w-16"></div>
            <div className="skeleton h-4 w-24"></div>
          </div>

          <div className="skeleton h-8 w-32"></div>

          <div className="skeleton h-10 w-full md:w-40"></div>

          <div className="space-y-2 mt-6">
            <div className="skeleton h-4 w-3/4"></div>
            <div className="skeleton h-4 w-2/3"></div>
            <div className="skeleton h-4 w-1/2"></div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 space-y-3">
        <div className="skeleton h-6 w-48"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/6"></div>
      </div>

      {/* QnA */}
      <div className="mt-12 space-y-3">
        <div className="skeleton h-6 w-56"></div>
        <div className="skeleton h-14 w-full"></div>
        <div className="skeleton h-14 w-full"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
