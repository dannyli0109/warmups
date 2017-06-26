require "pry"
require "securerandom"
$chars = ("A".."Z").to_a
class Robot
  def initialize
    @uuid = SecureRandom.uuid
    @timeCreate = Time.now
    @instructions = 0;
    init
  end

  def name
    if @resetCounter >= @maxCount
      @reset = true
      return "Resetting to factory settings."
    end
    @resetCounter += 1
    @instructions += 1
    return @name
  end

  def reset
    if !@reset
      return "No reset required"
    end
    @instructions += 1
    init
  end

  def timers
    time = Time.now
    return "#{time - @timeReset} seconds since last boot, #{time - @timeCreate} seconds since creation"
  end

  def instruction_count
    return @instructions
  end

  def init
    name = "#{$chars[rand(0..25)]}#{$chars[rand(0..25)]}#{rand(0..9) }#{rand(0..9)}#{rand(0..9)}"
    @name = name
    @resetCounter = 0
    @maxCount = rand(3..8)
    @reset = false
    @timeReset = Time.now
    return self
  end
end
binding.pry
