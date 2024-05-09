const AccountOrder = () => {
  return (
    <>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase border-b-2 border-solid border-[#00000013]">
              <tr>
                <th scope="col" className="px-3 py-3 text-base title-font title-color">
                ORDER
                </th>
                <th scope="col" className="px-3 py-3 text-base title-font title-color">
                DATE
                </th>
                <th scope="col" className="px-3 py-3 text-base title-font title-color">
                STATUS
                </th>
                <th scope="col" className="px-3 py-3 text-base title-font title-color">
                TOTAL
                </th>
                <th scope="col" className="px-3 py-3 text-base title-font title-color text-end">
                ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-[1px] border-solid border-[#0000001b]">
                <td className="px-3 py-4 text-font text-color-black text-sm">
                    <a href="">#2020</a>
                </td>
                <td className="px-3 py-4 text-font text-color-black text-sm">May 1, 2024</td>
                <td className="px-3 py-4 text-font text-color-black text-sm">Processing</td>
                <td className="min-w-[325px] px-3 py-4 text-color-black text-sm"><span className="wd-text-font-bold color-primary">	$898.00</span> for 2 items</td>
                <td className="px-3 py-4 flex justify-end">
                    <a href="#" className="w-[56px] h-[36px] flex justify-center items-center
                     block bg-primary text-xs text-white title-font rounded-[35px]
                     transtion-all duration-200 ease-linear hover:bg-[#df8c4f]
                     "
                    >View</a>
                </td>

              </tr>
              <tr className="border-b-[1px] border-solid border-[#0000001b]">
                <td className="px-3 py-4 text-font text-color-black text-sm">
                    <a href="">#2020</a>
                </td>
                <td className="px-3 py-4 text-font text-color-black text-sm">May 1, 2024</td>
                <td className="px-3 py-4 text-font text-color-black text-sm">Processing</td>
                <td className="min-w-[325px] px-3 py-4 text-color-black text-sm"><span className="wd-text-font-bold color-primary">	$898.00</span> for 2 items</td>
                <td className="px-3 py-4 flex justify-end">
                    <a href="#" className="w-[56px] h-[36px] flex justify-center items-center
                     block bg-primary text-xs text-white title-font rounded-[35px]
                     transtion-all duration-200 ease-linear hover:bg-[#df8c4f]
                     "
                    >View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AccountOrder;
