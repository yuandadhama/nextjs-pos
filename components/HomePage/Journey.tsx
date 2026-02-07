const Journey = () => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-6">OUR JOURNEY</h3>
      <div>
        {/* the vision journey */}
        <div className="journey-card">
          <div className="dot bg-brand">
            {/* line down  */}
            <div className="w-1 h-26 bg-gray-300 absolute top-4 left-1.5"></div>
          </div>
          <div className="text-sm font-bold text-brand">2021</div>
        </div>
        <div className="pl-6 mt-1">
          <h4 className="font-bold">The Vision</h4>
          <p className="text-md text-text-secondary font-light">
            Founded in a small garage with a goal to disrupt the complex retail
            market.
          </p>
        </div>

        {/* beta launch journey  */}
        <div className="journey-card mt-7">
          <div className="dot bg-success">
            {/* line down  */}
            <div className="w-1 h-25 bg-gray-300 absolute top-5 left-1.5"></div>
          </div>
          <div className="text-sm font-bold text-success">2022</div>
        </div>
        <div className="pl-6 mt-1">
          <h4 className="font-bold">Beta Launch</h4>
          <p className="text-md text-text-secondary font-light">
            Obtained 100 local cafes to test our cloud-based infrastructure.
          </p>
        </div>

        {/* expansion journey  */}
        <div className="journey-card mt-7">
          <div className="dot bg-brand">
            {/* line down  */}
            <div className="w-1 h-25 bg-gray-300 absolute top-5 left-1.5"></div>
          </div>
          <div className="text-sm font-bold text-brand">2023</div>
        </div>
        <div className="pl-6 mt-1">
          <h4 className="font-bold">Expansion</h4>
          <p className="text-md text-text-secondary font-light">
            Launched our mobile companion app and integrated multi-store
            management features.
          </p>
        </div>

        {/* 10k+ customers journey  */}
        <div className="journey-card mt-7">
          <div className="dot bg-text-secondary">
            {/* line down  */}
            <div className="w-1 h-24 bg-linear-to-b from-gray-300 to-background-primary absolute top-5 left-1.5"></div>
          </div>
          <div className="text-sm font-bold text-text-secondary">2024</div>
        </div>
        <div className="pl-6 mt-1">
          <h4 className="font-bold">10k+ Customers</h4>
          <p className="text-text-secondary font-light">
            Proudly serving over 10,000 businesses accros three continents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;
