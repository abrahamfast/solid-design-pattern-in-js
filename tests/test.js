describe("Task",() => {

    it("has a title", () => {
        expect(new Task().title).toEqual("Untitled Task")
    })

    it("can be set a title", () => {
        expect(new Task({title: "My First Task"}).title).toEqual("My First Task")
    })
    
})