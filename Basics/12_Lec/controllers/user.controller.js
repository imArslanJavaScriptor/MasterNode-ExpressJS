export const home = (req, res) => {
  res.send("App is Working");
}

export const login = (req, res) => {
  console.log(req.body);
  res.status(200)
  .json({
     success: true,
     message: "User Loged In Successfully"
    });
}

export const register = (req, res) => {
  console.log(req.body);
  res.status(200)
  .json({
     success: true,
     message: "User Register Successfully"
    });
}