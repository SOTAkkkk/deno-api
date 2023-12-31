import {Application, Router} from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set("1", {
    id: "1",
    title: "The Hound of the Baskervilles",
    author: "Conan Doyle, Arthur",
})

const router = new Router();
router.get("/", (context) => {
    context.response.body = `Hello oak!`;
    console.log("hello oak!")
})
    .get("/book", (context) => {
        context.response.body = Array.from(books.values());
        console.log("display books")
    })
    .get("/book/:id", (context) => {
            if (books.has(context?.params?.id)) {
                context.response.body = books.get(context.params.id);
                console.log(`display book id=${context.params.id}`)
            }
        }
    );

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8080});
