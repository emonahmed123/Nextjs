import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Posts = async () => {
    const res = await fetch('http://localhost:5000/post', {
        // cache: "force-cache"
        // next: {
        //     revalidate: 5,
        // }

        cache: "no-store"

    })
    const posts = await res.json()


    return (
        <div>
            <h2 className='text-2xl' > Total Post:{posts.length}</h2>

            <div className='grid grid-cols-1 gap-5'>
                {
                    posts.map((post, i) => <div key={i} >
                        <div className="card  bg-base-100 shadow-xl w-[80%] mx-auto">

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.description}</p>
                                <p>{post.likeCount}</p>
                                <div className="card-actions">
                                    <Link href={`/post/${post.id}`}>

                                        <button className="btn btn-primary">See more</button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Posts;