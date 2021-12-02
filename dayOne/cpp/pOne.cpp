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
	prevNum = numbers.at(0);
	curNum = numbers.at(1);
	for (int i=0; i < numbers.size(); i++) {
		std::cout << numbers.at(i) << std::endl;
		if (prevNum < curNum) {
			inc++;
		}
		prevNum = curNum;
		curNum = numbers.at(i);
	}
	std::cout << inc << " increments" << std::endl;
	return 0;
}
