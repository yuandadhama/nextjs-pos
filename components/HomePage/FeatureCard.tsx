type props = {
  index: number;
  title: string;
  description: string;
  icon: React.ReactElement;
};

const FeatureCard = ({ index, title, description, icon }: props) => {
  return (
    <div className=" border-gray-200 shadow border p-5 rounded-2xl mb-5">
      <div className="flex gap-4">
        <div>
          <div
            className={`${index === 1 ? "bg-success-muted" : "bg-brand-muted"}  p-2 flex-center rounded-lg`}
          >
            {icon}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-1">{title}</h4>
          <p className="text-sm text-text-secondary font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
