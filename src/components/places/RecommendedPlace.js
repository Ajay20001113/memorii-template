import React, {Component} from 'react';
import {IoIosCheckmarkCircle, IoIosLink, IoMdStar, IoMdStarHalf} from "react-icons/io";
import {GiChickenOven} from "react-icons/gi";
import {RiHotelBedLine, RiPlaneLine} from "react-icons/ri";
import {FiHeart, FiPhone} from "react-icons/fi";
import {FaRegCalendarCheck} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import img1 from '../../assets/images/img28.jpg';
import img2 from '../../assets/images/img29.jpg';
import img3 from '../../assets/images/img30.jpg';
import authorimg from '../../assets/images/small-team1.jpg';

class RecommendedPlace extends Component {
    state = {
        items: [
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img1,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'Closed',
                title: 'beach blue boardwalk',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Travel',
                cardTypeIcon: <RiPlaneLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img3,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.items.map((item, index) => {
                        return (
                            <div className="col-lg-4 column-td-6" key={index}>
                                <div className="card-item">
                                    <a href={item.titleUrl} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.image} className="card__img" alt="Place" />
                                            <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span>
                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <FiHeart />
                                            </span>
                                        </div>
                                    </a>
                                    <div className="card-content-wrap">
                                        <div className="card-content">
                                            <a href={item.titleUrl}>
                                                <h5 className="card-meta">
                                                    <span>{item.cardTypeIcon}</span> {item.cardType}
                                                </h5>
                                                <h4 className="card-title">{item.title}
                                                    <i>{item.titleIcon}</i>
                                                </h4>
                                                <p className="card-sub">
                                                    {item.stitle}
                                                </p>
                                            </a>
                                            <a href={item.authorUrl} className="author-img">
                                                <img src={item.author} alt="author-img" />
                                            </a>
                                            <ul className="info-list padding-top-20px">
                                                <li><span className="la d-inline-block"><FiPhone /></span> {item.number}</li>
                                                <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.websiteUrl}>
                                                    {item.website}
                                                </a>
                                                </li>
                                                <li>
                                                    <span className="la d-inline-block"><FaRegCalendarCheck /></span> {item.date}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rating-row">
                                            <div className="rating-rating">
                                                {item.ratings.map((rating, index) => {
                                                    return (
                                                        <span key={index}>{rating}</span>
                                                    )
                                                })}
                                                <span className="rating-count">{item.ratingNum}</span>
                                            </div>
                                            <div className="listing-info">
                                                <ul>
                                                    <li><span className="info__count"><AiOutlineEye /></span> {item.view}</li>
                                                    <li>
                                                        <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                                                            <FiHeart />
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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

export default RecommendedPlace;