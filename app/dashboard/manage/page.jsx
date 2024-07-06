import Manage from "./../../../components/dashboard/manage/Manage";

async function ManagePage() {
  const result = await fetch(`https://sprcbd-blue.vercel.app/all-blogs-manage`, {
    cache: "no-cache",
  });
  const data = await result.json();

  function parseDate(dateStr) {
    return new Date(dateStr);
  }
  const blogsData = data.sort((a, b) => {
    return parseDate(b?.postedDate) - parseDate(a?.postedDate);
  });

  return (
    <div>
      <Manage blogsData={blogsData} />
    </div>
  );
}

export default ManagePage;