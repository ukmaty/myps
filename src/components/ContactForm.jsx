// import axios from "axios";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data["form-name"] = "contact";
    // axios.post("/", new URLSearchParams(data)).then(postSubmission).catch(handleError);

    console.log(data["form-name"]);
    console.log(data);
  };

  console.log("errors: ", errors);

  const listStyle = {
      margin: "0",
      padding: "0",
      listStyleType: "none",
  };

  const itemStyle = {
      marginBottom: "2rem"
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul style={listStyle}>
        <li style={itemStyle}>
          <label htmlFor="name">Name</label>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </div>
          {errors.comment && <SnackBar />}
        </li>
        <li style={itemStyle}>
          <label htmlFor="email">Mail</label>
          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              {...register("email", { required: true, maxLength: 100 })}
            />
          </div>
          {errors.comment && <SnackBar />}
        </li>
        <li style={itemStyle}>
          <label htmlFor="comment">Comment</label>
          <div>
            <textarea
              type="text"
              placeholder="Comment"
              name="comment"
              {...register("comment", { required: true, maxLength: 200 })}
            />
          </div>
          {errors.comment && <SnackBar />}
        </li>
      </ul>
      <div>
        <input type="submit" value="送信" />
      </div>
    </form>
  );
}

const SnackBar = () => {
  const style = {
    margin: 0,
    padding: "1rem",
    backgroundColor: "#ff0000",
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "800",
  };
  return <p style={style}>This field is required</p>;
};
