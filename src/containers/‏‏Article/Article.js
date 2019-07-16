import React from 'react'
import classes from './Article.css';
import * as FontAwesome from 'react-icons/fa';

const Article = (props) => {

    // let article_list = null;
    // if (props.articles != null && props.articles && props.articles.length > 0) {
    //     let articles = props.articles.filter(function (o) { return o.status === '1'; });
    //
    //     list = (
    //         articles.map((article, index) => {
    //             let fontAwesome = article.ismovie ? <FontAwesome.FaPlayCircle className={classes.FontAwesome} /> : null;
    //
    //             //return <Article article={article} />
    //             return <li className={classes.Article} key={article.guid}>
    //                 <a href="">
    //                     <div className={classes.container}>
    //                         <div className={classes.container_img}>
    //                             <img src={article.images[0].url + '?width=130&height=130&mode=stretch'} />
    //                             {fontAwesome}
    //                         </div>
    //                         <div className={classes.container_data}>
    //                             <div className={classes.container_data_title}>
    //                                 {article.title}
    //                             </div>
    //                             <div className={classes.container_data_reporter}>
    //                                 מאת: {article.reporternick}
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </a>
    //             </li>
    //         })
    //
    //     );
    // }
    let fontAwesome = props.article.ismovie ? <FontAwesome.FaPlayCircle className={classes.FontAwesome} /> : null;

    //return <Article article={article} />
    return <li className={classes.Article} key={props.article.guid}>
        <a href="">
            <div className={classes.container}>
                <div className={classes.container_img}>
                    <img src={props.article.images[0].url + '?width=130&height=130&mode=stretch'} />
                    {fontAwesome}
                </div>
                <div className={classes.container_data}>
                    <div className={classes.container_data_title}>
                        {props.article.title}
                    </div>
                    <div className={classes.container_data_reporter}>
                        מאת: {props.article.reporternick}
                    </div>
                </div>
            </div>
        </a>
    </li>

}

export default Article;