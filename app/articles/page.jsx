import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";

const ArticlesPage = async () => {
  const res = await fetch(
    "https://dev.to/api/articles/me/published?per_page=6",
    {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY,
      },
    }
  );

  const articles = await res.json();
  if (articles.error) {
    console.log(articles);
  }
  return (
    <>
      {articles.error ? (
        <>
          <h1>Nothing to do here!!</h1>
        </>
      ) : (
        <>
          <h3>
            Recent Posts from{" "}
            <a
              href="https://dev.to/itsnitinr"
              target="_blank"
              rel="noopener"
              className={styles.underline}
            >
              dev.to
            </a>
          </h3>
          <div className={styles.container}>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ArticlesPage;
