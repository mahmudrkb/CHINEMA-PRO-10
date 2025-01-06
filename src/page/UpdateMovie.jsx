import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const movie = useLoaderData();

  const { _id, poster, title, genre, duration, rating, year, summary } = movie;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      poster: movie.poster,
      title: movie.title,
      genre: movie.genre,
      duration: movie.duration,
      year: movie.year,
      summary: movie.summary,
      rating: movie.rating,
    },
  });
  const [newRating, setRating] = useState(0);
  const handelRating = (newRating) => {
    setRating(newRating);
    setValue("rating", newRating, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/ allMovies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Movie updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          reset();
          setRating(0);
        }
      });
  };

  return (
    <div className="dark:bg-slate-800 bg-white dark:text-white">
      <div className="hero py-10  min-h-screen">
        <div className="card  w-full max-w-3xl shrink-0 bg-white shadow-2xl">
          <h1 className="text-center font-bold text-3xl pt-5">Updated Movie</h1>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text text-primary text-lg font-medium">
                    Movie Poster
                  </span>
                </label>
                <input
                  type="url"
                  defaultValue={poster}
                  {...register("poster_url", { required: true })}
                  placeholder="Enter Url of Poster"
                  className="input dark:text-primary input-bordered"
                />
                {errors.poster && (
                  <p className="text-sm pt-2 text-red-700">
                    This field is Required
                  </p>
                )}
              </div>

              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text text-primary text-lg font-medium">
                    Movie Title
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={title}
                  {...register("movieTitle", { required: true, minLength: 2 })}
                  placeholder="Enter Movie MoviePoster"
                  className="input dark:text-primary input-bordered"
                />
                {errors.title?.type === "required" && (
                  <p className="text-sm text-red-700 mt-2">
                    This Field is Required !
                  </p>
                )}
                {errors.title?.type === "minLength" && (
                  <p className="text-sm text-red-700 mt-2">
                    Write Minimum 2 Text
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text text-primary text-lg font-medium">
                    Genre
                  </span>
                </label>
                <select
                  defaultValue={genre}
                  multiple
                  className="select dark:text-black select-bordered w-full"
                  {...register("genre", { required: true })}
                >
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Horror">Horror</option>
                  <option value="Action">Action</option>
                </select>
                {errors.genre?.type === "required" && (
                  <p className="text-sm text-red-700 mt-5">
                    This Field is Required !
                  </p>
                )}
              </div>

              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text text-primary text-lg font-medium">
                    Duration
                  </span>
                </label>
                <input
                  type="number"
                  defaultValue={duration}
                  {...register("duration", { required: true, min: 60 })}
                  placeholder="Enter  Duration of Movie"
                  className="input dark:text-primary input-bordered"
                />

                {errors.duration?.type === "required" && (
                  <p className="text-sm text-red-700 mt-5">
                    This Field is Required
                  </p>
                )}
                {errors.duration?.type === "min" && (
                  <p className="text-sm text-red-700 mt-5">
                    Minimum input 60 !
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text text-primary text-lg font-medium">
                    Release Year
                  </span>
                </label>
                <select
                  defaultValue={year}
                  {...register("year", { required: true })}
                  className="select dark:text-black select-bordered w-full"
                >
                  <option value="" disabled>
                    Select Release Year
                  </option>

                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
                {errors.year?.type === "required" && (
                  <p className="text-sm text-red-700 mt-2">
                    This Field is Required
                  </p>
                )}
              </div>

              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text text-primary text-lg font-medium">
                    Rating
                  </span>
                </label>
                <Rating onClick={handelRating} initialValue={rating} />
                <input
                  type="hidden"
                  defaultValue={newRating}
                  {...register("rating", { required: true })}
                  value={rating}
                />
                {errors.rating?.type === "required" && (
                  <p className="text-sm text-red-700 mt-2">
                    Rating is Required
                  </p>
                )}
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-primary text-lg font-medium">
                  Summary
                </span>
              </label>
              <textarea
                defaultValue={summary}
                {...register("summary", { required: true, minLength: 10 })}
                placeholder="Enter summary"
                name="summary"
                className="textarea resize-none dark:text-primary textarea-bordered textarea-sm w-full"
              ></textarea>
              {errors.summary?.type === "required" && (
                <p className="text-sm mt-2 text-red-700">
                  This Field is Required
                </p>
              )}
              {errors.summary?.type === "minLength" && (
                <p className="text-sm mt-2 text-red-700">
                  Minimum input 10 character !
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="py-2 rounded-md bg-pink-500 text-white text-xl">
                Update Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;
