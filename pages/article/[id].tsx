import Link from "next/link";

const Article = ({ ...props }) => {
  return (
    <>
      <h1>{props.article.title}</h1>
      <p>{props.article.body}</p>
      <Link href="/">Go back</Link>
    </>
  );
};

export default Article;

/**
 * Server Side Generation
 * @param context
 * @returns
 */
export const getServerSideProps = async (context: any) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await data.json();

  return {
    props: {
      article,
    },
  };
};

/**
 * Static Side Generation
 * @param context
 * @returns
 */
// export const getStaticProps = async (context: any) => {
//   const data = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await data.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");

//   const articles = await data.json();

//   const ids = articles.map((item: any) => item.id);
//   const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
