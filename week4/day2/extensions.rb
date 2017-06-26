require "pry"
letters_to_convert = ["a","e","i","o"]
number_of_letter = [4,3,1,0]
while true
  puts "Input: "
  input = gets.chomp
  count = 0
  input_array = input.downcase.split("")

  input_array.each_with_index do |character, index|

    if count % 2 == 0
      input_array[index] = input_array[index].downcase
      count+=1
    else
      input_array[index] = input_array[index].upcase
      count+=1
    end
    letters_to_convert.each_with_index do |letter, i|
      if character.downcase == letters_to_convert[i]
        input_array[index] = number_of_letter[i]
        count = 0
      end
    end

    if character == " "
      count = 0
    end
    # character loop
  end
  puts input_array.join("")
end
binding.pry
