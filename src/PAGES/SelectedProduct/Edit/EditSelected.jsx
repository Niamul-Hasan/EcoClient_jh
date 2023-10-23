import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import bg from '../../../assets/logo_prevew.png'
import { useState } from "react";
import { useForm } from "react-hook-form";

const EditSelected = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { id } = useParams();
    const [toggled, setToggled] = useState(false);
    const [isAgree, setIsAgree] = useState(false);
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["selected"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/products/${id}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleImage = (event) => {
        console.log(event);
        const formData = new FormData();
        const image = event.image[0];
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=116aa0d121bd7177af4e1e86cf6e9223`;
        fetch(url, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(imgData => {
            if (imgData.success) {
                console.log(imgData.data.url)
                setToggled(false);

                const changedData = {
                    image: imgData.data.url
                }
                fetch(`https://eco-server-ecocraftz.vercel.app/updateImage/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(changedData),
                }).then(res => res.json()).then(data => {
                    if (data.modifiedCount) {
                        alert('your Image is successfully Updated');
                        refetch();
                    }

                });
            }
        })

    }

    const handleEdit = (info) => {
        const productInfo = {
            name: info.name,
            catagory: info.catagory,
            description: info.description,
            image: data.image
        };
        fetch(`https://eco-server-ecocraftz.vercel.app/updateImage/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productInfo),
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                alert('your Product is successfully Updated');
                refetch();
                setIsAgree(false);
            }

        });

    }

    const handleBack = (catalog) => {
        navigate(`/other/${catalog}`);
    }
    // console.log(data)
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={data?.image} className="lg:max-w-lg rounded-lg shadow-2xl" />
                        <div className="flex lg:flex-row flex-col justify-start items-center gap-4">
                            {!toggled && <button onClick={() => setToggled(true)} className="btn btn-sm btn-warning mt-4">Change Picture</button>
                            }
                            {/* for image input  */}
                            {toggled && <form onSubmit={handleSubmit(handleImage)} className="mt-4">

                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="file"
                                        placeholder="image here"
                                        // className="input input-bordered w-full max-w-xs"

                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: "Product image is required"
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span
                                            className="label-text-alt text-red-500 text-2xl">{errors.image.message}</span>}
                                        {errors.image?.type === 'pattern' && <span
                                            className="label-text-alt text-red-500 text-2xl">{errors.image.message}</span>}
                                    </label>
                                </div>
                                <input type="submit" value='Preview' className="btn btn-sm btn-success mt-4" />
                                <input onClick={() => setToggled(false)} value='Unchanged' className="btn btn-sm btn-success mt-4 mx-4" />
                            </form>}
                        </div>
                    </div>



                    {!isAgree && <div>
                        <h1 className="text-5xl font-bold">{data.name}</h1>
                        <h3 className="text-2xl font-serif text-white">Catagory: {data.catagory}</h3>
                        <p className="py-6 text-white font-serif">{data.description}</p>
                        <div className="flex flex-col gap-2 w-fit">
                            <button onClick={() => setIsAgree(true)}
                                className="btn btn-sm btn-warning">Change Information</button>
                            <button onClick={() => handleBack(data.catagory)}
                                className="btn btn-sm btn-warning w-fit">Back</button>
                        </div>


                    </div>}



                    {isAgree && <div>
                        <form onSubmit={handleSubmit(handleEdit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name here"
                                    className="input input-bordered w-full max-w-xs"
                                    style={{ border: "1px solid green" }}
                                    defaultValue={data.name}
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Product Name is required"
                                        }

                                    })} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span
                                        className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    {errors.name?.type === 'pattern' && <span
                                        className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">Catagory</span>
                                </label>
                                <select
                                    type="select"
                                    placeholder="Select Catagory"
                                    className="input input-bordered w-full max-w-xs"
                                    style={{ border: "1px solid green" }}
                                    defaultValue={data.catagory}
                                    {...register("catagory", {
                                        required: {
                                            value: true,
                                            message: "Catagory is required"
                                        }
                                    })} >

                                    <option value=""></option>
                                    <option value="chandor">Chandor</option>
                                    <option value="ladies bag">Ladies Bag</option>
                                    <option value="papose">Papose</option>
                                    <option value="pot">Pot</option>
                                    <option value="sataronji">Sataronji</option>
                                </select>
                                <label className="label">
                                    {errors.catagory?.type === 'required' && <span
                                        className="label-text-alt text-red-500">{errors.catagory.message}</span>}
                                    {errors.catagory?.type === 'pattern' && <span
                                        className="label-text-alt text-red-500">{errors.catagory.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white"> Short Discription</span>
                                </label>
                                <textarea
                                    type="textarea"
                                    placeholder="description here"
                                    className="input input-bordered w-full max-w-xs"
                                    style={{ border: "1px solid green" }}
                                    defaultValue={data.description}
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Product description is required"
                                        }

                                    })} />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span
                                        className="label-text-alt text-red-500">{errors.description.message}</span>}
                                    {errors.description?.type === 'pattern' && <span
                                        className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>

                            <input type="submit" value="Save the changes" className='btn btn-sm w-full max-w-xs bg-green-300 hover:bg-green-600' />
                            <input onClick={() => setIsAgree(false)} value="Unchanged" className='btn btn-sm w-full max-w-xs bg-green-300 hover:bg-green-600 mt-4' />
                        </form>
                    </div>}



                </div>
            </div>

        </div>
    );
};

export default EditSelected;