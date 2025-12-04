export default function NewsCard() {
  return (
    <article className="card">
      <div className="imageWrapper">
        <img className="image" src="" alt="" />
        <span className="badge">뉴스</span>
      </div>

      <div className="content">
        <div className="meta">
          <span className="author">ㅇㅇㅇ</span>
          <span>ㅇㅇㅇ</span>
        </div>
        <h3 className="title">제목</h3>
        <p className="description">설명</p>
      </div>

      <div className="footer">
        <span className="timestamp">2025-11-11</span>
        <a className="link" href="" target="_blank">
          기사 읽기
        </a>
      </div>
    </article>
  );
}
