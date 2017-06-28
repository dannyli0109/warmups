class Dice
  @@sides = [1,2,3,4,5,6]
  @@result_array = []


  def self.roll *times
    @@result_array = []
    if times.length <= 0
      result = @@sides.sample
      puts display_dice result
      return result
    end
    i = 0
    return_array = []

    while i < times[0]
      return_array << @@sides.sample
      i += 1
    end
    @@result_array = return_array
    Dice
  end



  def self.total
    return [@@result_array, @@result_array.sum]
  end

  def self.display_dice result
    return_string = ""
    below_three = result <= 3 ? true : false
    number_of_cols = below_three ? result : (result/2.to_f).ceil

    i = 0
    first_line = ""
    line_string = ""
    line_string2 = ""
    while i < number_of_cols
      first_line += "_"
      line_string += "*"
      if result - number_of_cols > i
        line_string2 += "*"
      else
        line_string2 += " "
      end
      i += 1
    end

    return "_#{first_line}_\n|#{line_string}|\n|#{line_string2}|\n_#{first_line}_"

  end



end
