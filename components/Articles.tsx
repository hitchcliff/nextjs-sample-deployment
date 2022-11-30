import Link from "next/link";
import styles from "../styles/Home.module.css";

export type Article = {
  id: number;
  userId: number;
  body: string;
  title: string;
};

interface ArticlesProps {
  articles: Article[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <section className={styles.articleContainer}>
      {articles.map((item, idx) => (
        <Link
          href="/article/[id]"
          as={`/article/${item.id}`}
          key={idx}
          className={styles.card}
        >
          <h4>{item.title}</h4>
          <p className={styles.description}>{item.body}</p>
        </Link>
      ))}
    </section>
  );
};

export default Articles;
