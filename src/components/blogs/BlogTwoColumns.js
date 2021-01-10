import React, {Component} from 'react';
import {Link} from "react-router-dom";
import img1 from '../../assets/images/img31.jpg';
import img2 from '../../assets/images/img32.jpg';
import img3 from '../../assets/images/img30.jpg';
import img4 from '../../assets/images/img31.jpg';
import img5 from '../../assets/images/img32.jpg';
import img6 from '../../assets/images/img30.jpg';
import img7 from '../../assets/images/img32.jpg';
import img8 from '../../assets/images/img30.jpg';
import authorImg from '../../assets/images/testi-img7.jpg';

class BlogTwoColumns extends Component {
    state = {
        items: [
            {
                img: img1,
                title: '50 Greatest Event Places in United Kingdom',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorImg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorImg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img3,
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorImg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img4,
                title: '50 Greatest Event Places In United Kingdom',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorImg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img5,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorImg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img6,
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorImg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img7,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorImg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img8,
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorImg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.state.items.map((item, i) => {
                        return (
                            <div className="col-lg-6 column-td-6" key={i}>
                                <div className="card-item blog-card">
                                    <Link to={item.titleLink} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.img} alt="Blog Two Columns" className="card__img" />
                                        </div>
                                    </Link>
                                    <div className="card-content pl-0 pr-0">
                                        <Link to={item.titleLink} className="card-title">
                                            {item.title}
                                        </Link>
                                        <ul className="card-meta pl-0 d-flex justify-content-between align-items-center mt-2">
                                            <li>{item.date} - <a href={item.metaLink} className="tag__text">{item.meta}</a></li>
                                            <li><Link to="#">{item.likes} Likes</Link></li>
                                        </ul>
                                        <p className="card-sub mt-3">
                                            {item.desc}
                                        </p>
                                        <ul className="post-author d-flex align-items-center justify-content-between mt-3">
                                            <li>
                                                <img src={item.authorImg} alt="Author" />
                                                <span className="by__text"> By</span>
                                                <span> {item.author}</span>
                                            </li>
                                            <li>
                                                <Link to={item.readmoreLink} className="blog__btn">
                                                    {item.readmore}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default BlogTwoColumns;