describe("Task",() => {
    it("has a title", () => {
        expect(new Task().title).toEqual("Untitled Task")
    })
})