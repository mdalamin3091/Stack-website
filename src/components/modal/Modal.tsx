const Modal = ({
  showModal,
  setShowModal,
  title,
  children,
}: {
  showModal: boolean;
  setShowModal: (isModal: boolean) => void;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      {showModal ? (
        <div className="fixed z-50 inset-0 overflow-hidden flex items-center justify-center">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="bg-white rounded-lg overflow-hidden transform">
            <div className="bg-white p-8">
              <h3 className="text-3xl text-black font-semibold mb-4">
                {title}
              </h3>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
