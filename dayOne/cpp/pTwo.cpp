#include <iostream>
#include <fstream>
#include <vector>

std::vector<int> numbers;
int prevNum = 0;
int curNum = 0;
int inc = 0;

int main() {
	std::ifstream in;
	in.open("../../input");
	if (in.is_open()) {
		while(in.good()) {
			std::string line;
			while(std::getline(in, line)) {
				std::cout << line << std::endl;
				numbers.push_back(std::stoi(line));
			}
		}
	}
	std::cout << numbers.at(0) << "\n";
	prevNum = numbers.at(numbers.at(0) + numbers.at(1) + numbers.at(2));
	for (int i=1; i < numbers.size()-2; i++) {
		curNum = numbers.at(i) + numbers.at(i+1) + numbers.at(i+2);
		std::cout << curNum << std::endl;
		if (prevNum < curNum) {
			inc++;
		}
		prevNum = curNum;
	}
	std::cout << inc+1 << " increments" << std::endl;
	return 0;
}
