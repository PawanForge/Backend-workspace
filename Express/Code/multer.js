
import express from "express";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload')
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname)
    },
})

// Multer configuration
// const upload = multer({ dest: "upload/" });
const upload = multer({storage})

// Home page
app.get("/", (req, resp) => {
    resp.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="myfile" />
            <button type="submit">Upload File</button>
        </form>
    `);
});

// Upload route
app.post("/upload", upload.single("myfile"), (req, resp) => {
    console.log(req.file);

    resp.send("File uploaded successfully");
});

// Start server
app.listen(3200, () => {
    console.log("Server running on port 3200");
});

