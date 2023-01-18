import React, { useContext } from 'react';
import BlogSingle from './BlogSingle';
import { blog_list } from '../data/data';
import { globalContext } from '../context/Context';
const Blog = () => {

    const { value } = useContext(globalContext)

    return (
        <main className='blog'>
            <div className="blog-container">
                <div className="blog-row">
                    {
                        blog_list.filter((val, e) => {
                            if (value === "") {
                                return val;
                            } else if (val.category.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                                return val;
                            }
                        }).map((item, index) => {
                            return (
                                <div key={index} className="blog-item">
                                    <BlogSingle item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </main>
    );
}

export default Blog;
