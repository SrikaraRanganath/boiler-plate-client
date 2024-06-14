import '../assets/styles/news.css'

const News = () => {
    return(
        <>
                <div className="news-links-container">
      <h1 className="title">Top News Websites</h1>
      <div className="link-container">
        <h2>BBC News</h2>
        <a href="https://www.bbc.com/news" target="_blank" rel="noopener noreferrer">
          Visit BBC News
        </a>
      </div>
      <div className="link-container">
        <h2>CNN News</h2>
        <a href="https://www.cnn.com" target="_blank" rel="noopener noreferrer">
          Visit CNN News
        </a>
      </div>
      <div className="link-container">
        <h2>Reuters</h2>
        <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer">
          Visit Reuters
        </a>
      </div>
    </div>
        </>
    )
}

export default News;