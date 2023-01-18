import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { blog_list } from '../data/data';

export default function BlogDetail() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const detail = blog_list.find((post) => post.id === Number(id))
    return (
        <div className='detail'>
            <Link className='bake' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            <section className='blog-single' id='blog-detail'>
                <p className="user-name">{detail.user_date}</p>
                <span className="title">{detail.title} </span>
                <span className="category">{detail.category}</span>
                <img src={detail.banner} className="banner" />
                <div className="blog-bottom">
                    <p className="content">{detail.content}</p>
                </div>
            </section>
        </div>
    )
}
