/**
 *  Grouping related specs
 *  TimedTask
 */
describe("TimedTask", () =>{

    it('has a title', () => {
        expect(new TimedTask({title: "My Timed Task"}).title)
            .toEqual("My Timed Task")
    });

    it("has starting time", () => {
        expect(new TimedTask().startingDate)
            .toBeGreaterThan(545454485)
    })

})