import Link from 'next/link';
import React from 'react';


export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }]
}
const pageDetail = async ({ params }) => {


    const res = await fetch(`http://localhost:5000/post/${params.postid}`)
    const post = await res.json()

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl w-[80%] mx-auto">

                <div className="card-body items-center text-center">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.likeCount}</p>
                    <div className="card-actions">
                        <Link href={`/post`}>

                            <button className="btn btn-primary">Back</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default pageDetail;