import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogSingle({ item }) {

    const { get_details, banner, category, title, content, user_img, user_name, user_date } = item

    return (
        <section className='blog-single'>
            <img src={banner} alt="" className="banner" />
            <div className="blog-bottom">
                <span className="category">{category}</span>
                <span className="title">{title} </span>
                <p className='content'>{content}</p>
                <div className="user">
                    <div className="user-left">
                        <img src={user_img} alt="" />
                        <p className="user-name">{user_name}<span> {user_date} </span> </p>
                    </div>
                    <div className="link">
                        <Link to={`/posts/${item.id}`}> {get_details} </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
