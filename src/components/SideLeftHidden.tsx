const SideLeftHidden = ({ children }: { children: any }) => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000b3] z-20">
        <div className="fixed bottom-0 right-0 top-0 w-[340px] bg-white">
            {children}
        </div>
      </div>
    </>
  );
};

export default SideLeftHidden;
