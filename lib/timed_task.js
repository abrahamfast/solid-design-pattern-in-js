/**
 *  TimedTask
 *  @see prototypes branch
 */
let TimedTask = function(option) {
    var option = option || {}
    var that = new Task(option)
    that.startingDate = option.startingDate || new Date().getTime()

    return that
}