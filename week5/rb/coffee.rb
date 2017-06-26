
class Coffee
  def initialize coffee, notes, size, name, option
    @coffee = coffee
    @notes = notes
    @size = size
    @name = name
    @time = Time.now
    @wait_time = rand(2..5)
    @collected = false
    @option = option
  end

  def to_s
    wrong_name = ""
    @name.split("").each_with_index do |i, index|
      if index == 0
        wrong_name += ("A".."Z").to_a.sample
      else
        wrong_name += i
      end
    end
    return_string = "#{wrong_name}'s #{@coffee}, #{@size}, #{@notes}"
    if @option != nil
      return_string += " with #{@option}."
    else
      return_string += "."
    end
    return return_string
  end

  def ready?
    now = Time.now
    if (now - @time)/60 >= @wait_time
      puts self
    else
      puts "Nope"
    end
  end

  def collected= collected
    @collected = collected
  end

  def collected
    return @collected
  end


end
