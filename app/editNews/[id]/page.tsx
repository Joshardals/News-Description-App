import UpdateNews from "@/components/form/UpdateNews";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <>
      <UpdateNews id={id} />
    </>
  );
};
export default page;
