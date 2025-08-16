import { useState } from 'react';
import styles from '../css/home.module.css';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Home = () => {
  const [like,setLike] = useState(false);
  const [love,setLove] = useState(false);
  const [angry,setAngry] = useState(false);
  const [sad,setSad] = useState(false);

  const [activeReaction, setActiveReaction] = useState(null); 

  const [likeCount, setLikeCount] = useState(100);
  const [loveCount, setLoveCount] = useState(200);
  const [angryCount, setAngryCount] = useState(50);
  const [sadCount, setSadCount] = useState(30);

  const handleReaction = (x) => {
  setLike(false);
  setLove(false);
  setAngry(false);
  setSad(false);

  if (activeReaction !== x) {
    switch(x) {
      case 'like': 
        setLike(true);
        setLikeCount(likeCount + 1);
        break;
      case 'love': 
        setLove(true);
        setLoveCount(loveCount + 1);
        break;
      case 'angry': 
        setAngry(true);
        setAngryCount(angryCount + 1);
        break;
      case 'sad': 
        setSad(true);
        setSadCount(sadCount + 1);
        break;
    }
    setActiveReaction(x);
  } else {
    setActiveReaction(null);
    switch(x) {
      case 'like': setLikeCount(likeCount - 1); break;
      case 'love': setLoveCount(loveCount - 1); break;
      case 'angry': setAngryCount(angryCount - 1); break;
      case 'sad': setSadCount(sadCount - 1); break;
    }
  }
};

  const [currentPage, setCurrentPage] = useState(0);
  const comments = [
    { id: 1, text: "Great post!" },
    { id: 2, text: "Thanks for sharing" },
    { id: 3, text: "I disagree with this" },
    { id: 4, text: "Very informative" },
    { id: 5, text: "Where did you find this?" },
    { id: 6, text: "First comment here!" }
  ];
  const commentsPerPage = 2;
  const pageCount = Math.ceil(comments.length / commentsPerPage);
  const currentComments = comments.slice(currentPage * commentsPerPage,(currentPage + 1) * commentsPerPage);

  return (
    <div className={styles.TOTAL}>
      <p><u>Section ={">"} Sub Section</u></p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, error!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam cumque voluptate, pariatur nulla aliquid facere sunt ab ad, officia deleniti odit optio doloremque eligendi voluptatem fuga ipsa, dolor distinctio.</p>
      <div className={styles.redDiv}></div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fugiat alias accusamus amet minima dicta, consectetur facilis mollitia odio inventore.</p>
      <div className={styles.authorRow}>
        <div className={styles.avatarpic}></div>
        <div>
          <Link to="/author-profile" className={styles.authorLink}>Author Name</Link>
          <p>7 jan 2025</p>
        </div>
      </div>
      <hr/>
      <div className="paragraph">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates praesentium incidunt cumque at sint. Obcaecati fuga distinctio eum numquam natus voluptates. Doloremque fugiat amet quod deleniti ipsum rerum voluptatibus officiis sapiente sequi, eius aut ratione architecto, et delectus minima quibusdam quam asperiores. Placeat repellat totam commodi accusantium. Eaque, voluptates perferendis.</p>
      </div>
      <br />
      <br />
      <hr />
      
      <div className={styles.ReactionBox}>
        <button 
          onClick={() => handleReaction('like')}
          className={activeReaction === 'like' ? styles.active : ''}
          disabled={activeReaction && activeReaction !== 'like'}
        >
         <i className={activeReaction === 'like' ? "fa-solid fa-thumbs-up" : "fa-regular   fa-thumbs-up"} />
         <span>Like</span>
         <span className={styles.reactionCounter}>{likeCount}</span>
        </button>
        <button 
          onClick={() => handleReaction('love')}
          className={activeReaction === 'love' ? styles.active : ''}
          disabled={activeReaction && activeReaction !== 'love'}
        >
         <i className={activeReaction === 'love' ? "fa-solid fa-heart" : "fa-regular   fa-heart"} />
         <span>Love</span>
         <span className={styles.reactionCounter}>{loveCount}</span>
        </button>
        <button 
          onClick={() => handleReaction('angry')}
          className={activeReaction === 'angry' ? styles.active : ''}
          disabled={activeReaction && activeReaction !== 'angry'}
        >
         <i className={activeReaction === 'angry' ? "fa-solid fa-face-angry" : "fa-regular   fa-face-angry"} />
         <span>Angry</span>
         <span className={styles.reactionCounter}>{angryCount}</span>
        </button>
        <button 
          onClick={() => handleReaction('sad')}
          className={activeReaction === 'sad' ? styles.active : ''}
          disabled={activeReaction && activeReaction !== 'sad'}
        >
         <i className={activeReaction === 'sad' ? "fa-solid fa-face-sad-tear" : "fa-regular   fa-face-sad-tear"} />
         <span>Sad</span>
         <span className={styles.reactionCounter}>{sadCount}</span>
        </button>
        
      </div>
      <br />

      <div className={styles.MainCommentBox}>
        <p>{comments.length} Comments</p>
        <hr />
        <div className={styles.commentBox}
              contentEditable="true"
              placeholder="Write your comment...">
          <p>Write your comment{"->"}</p>
        </div>
        {currentComments.map(comment => (
          <div key={comment.id} className={styles.commentBox} style={{marginTop: '5px'}}>
            <div className={styles.authorRow}>
              <div className={styles.avatarpic}></div>
              <div>
                <Link to="/author-profile" className={styles.authorLink}>Author Name</Link>
                <p>7 Jan 2025</p>
              </div>
            </div>
            <p>{comment.text}</p>
              <div className={styles.commentActions}>
              <button className={styles.commentButton}>
                <i className="fa-regular fa-thumbs-up"></i> Like
              </button>
              <button className={styles.commentButton}>
                <i className="fa-regular fa-thumbs-down"></i> Dislike
              </button>
              <button className={styles.commentButton}>
                <i className="fa-regular fa-comment"></i> Reply
              </button>
              <button className={styles.commentButton}>
                <i className="fa-regular fa-flag"></i> Report
              </button>
            </div>
          </div>
        ))}

          <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={({selected}) => setCurrentPage(selected)}
            containerClassName={styles.paginationBttns}
            pageLinkClassName={styles.paginationLink}
            previousLinkClassName={styles.paginationLink}
            nextLinkClassName={styles.paginationLink}
            activeClassName={styles.paginationActive}
            disabledClassName={styles.paginationDisabled}
          />

      </div>
    </div>
  );
};

export default Home;