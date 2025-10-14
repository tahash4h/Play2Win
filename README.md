# Play2Win - Local Soccer Offensive Play Tracker

## 📊 Project Overview

**Play2Win** is a local soccer offensive play tracker designed to analyze and visualize offensive actions of a single team across multiple matches and seasons. Built entirely with HTML, CSS, and JavaScript, this project allows users to explore detailed play-level data in a fully browser-based environment without requiring professional datasets or external APIs.

The project emphasizes scalability and realism by including thousands of rows of simulated data spanning multiple seasons, making it ideal for practicing data analysis, visualization, and JavaScript-based manipulation of sports datasets.

## 🎯 Project Purpose

This local soccer tracker enables users to explore questions such as:

- **Play Type Analysis**: Which play types lead to the most goals or high-xG opportunities?
- **Player Impact**: How does player involvement impact the team's offensive success?
- **Location Strategy**: Which field locations or match phases generate the highest scoring chances?
- **Tactical Evolution**: How do offensive strategies change over multiple seasons or against different opponents?
- **Opponent Analysis**: How does performance vary against different opponents?
- **Trend Analysis**: What patterns emerge across different seasons and time periods?

## 📈 Dataset Statistics

- **Total Rows**: 10,001 (10,000 data rows + 1 header)
- **Total Games**: 1,812 matches
- **Date Range**: March 2024 → December 2005 (20 seasons)
- **Teams**: 20 opponent teams
- **Seasons Covered**: 20 seasons with descending chronological order

## 🏆 Team Structure

**Main Team**: Paris X Gen (example team being analyzed)

**Opponent Teams**: 20 diverse teams:
- Thunder FC, Phoenix United, Storm Rovers, Eagle City, Lightning Athletic
- Firestorm FC, Crimson Wolves, Golden Lions, Silver Hawks, Blue Sharks
- Green Dragons, Purple Panthers, Orange Tigers, Red Bulls, Black Knights
- White Eagles, Yellow Jackets, Maroon Stallions, Navy Seals, Forest Rangers

Each season cycles through all 20 opponent teams, ensuring consistent representation across all years. The dataset maintains chronological order with the most recent games appearing first.

## 📋 Dataset Columns Explained

### **Core Identifiers**
- **ID**: Sequential identifier from 1-10,000 for each play/row
- **Game ID**: Unique identifier for each match (1-~2,000)
- **Date**: Match date in YYYY-MM-DD format
- **Season**: Year of the season (2005-2024)

### **Match Context**
- **Minute**: Game minute when the play occurred (1-90)
- **Opponent**: Team name (Thunder FC, Phoenix United, Storm Rovers, etc.)

### **Play Classification**
- **Play Type**: Type of play executed
  - `Pass Sequence`: Series of passes between players
  - `Counterattack`: Fast attacking play after regaining possession
  - `Shot Attempt`: Direct attempt on goal
  - `Free Kick`: Set piece from a free kick
  - `Corner`: Corner kick set piece

### **Shot Analysis**
- **Shot Attempt**: Whether the play involved a shot (Yes/No)
- **Shot Distance**: Distance from goal in yards (5-30, only for shot attempts)
- **Shot Outcome**: Result of the shot attempt
  - `Goal`: Successfully scored
  - `Missed`: Shot went wide or over
  - `On Target`: Shot on target but saved
  - `Saved by GK`: Goalkeeper made a save

### **Advanced Metrics**
- **xG (Expected Goals)**: Probability-based scoring chance (0.00-0.70)
  - Higher values indicate better scoring opportunities
  - Calculated based on shot distance and context
- **Number of Passes**: Count of passes in the play sequence (1-8)
- **Second Chance**: Whether this was a follow-up opportunity (Yes/No)

### **Tactical Context**
- **Play Context**: Broader tactical situation
  - `Open Play`: Regular game flow
  - `Set Piece`: Free kick, corner, or throw-in
  - `Fast Break`: Quick transition play
- **Location on Field**: Where the play occurred
  - `Central inside box`: Inside the penalty area, central
  - `Central outside box`: Outside penalty area, central
  - `Left/Right wing inside box`: Inside penalty area, wing positions
  - `Left/Right wing outside box`: Outside penalty area, wing positions
  - `Central/Left/Right wing midfield`: Midfield positions
  - `Left/Right wing close to box`: Near penalty area, wing positions

### **Outcome Analysis**
- **Outcome**: Final result of the play
  - `Goal`: Successfully scored
  - `Turnover`: Lost possession
  - `Retained Possession`: Kept the ball
  - `Saved by GK`: Goalkeeper save
- **Success**: Whether the play was successful (Yes/No)
- **Win Impact**: Numerical impact on match outcome
  - `3`: Goal scored (highest positive impact)
  - `2`: On target shot or save (positive impact)
  - `1`: Retained possession (neutral impact)
  - `-1`: Turnover (negative impact)

### **Assist and Build-up**
- **Assist Type**: Type of assist provided
  - `None`: No assist involved
  - `Cross`: Cross from wide position
  - `Cutback`: Pass back from endline
  - `Through Ball`: Pass splitting the defense
- **Final Third Entry**: Whether play entered attacking third (Yes/No)

### **Play Characteristics**
- **Play Speed**: Tempo of the play
  - `Quick Attack`: Fast, direct play
  - `Slow Build-up`: Patient, methodical approach
- **Player Involvement**: Position of primary player
  - `Striker`: Forward/attacking player
  - `Midfielder`: Central midfield player
  - `Winger`: Wide midfield/attacking player
  - `Defender`: Defensive player
- **Phase of Match**: When in the game the play occurred
  - `Early`: Minutes 1-30
  - `Middle`: Minutes 31-59
  - `Late`: Minutes 60-90

## 🔍 Data Quality Features

- **Realistic xG Values**: Calculated based on shot distance and context
- **Consistent Team Cycling**: Each season follows the same team progression
- **Chronological Organization**: Most recent data first for trend analysis
- **Balanced Play Types**: Realistic distribution of different play types
- **Tactical Variety**: Comprehensive coverage of soccer situations

## 📊 Usage Examples

### **Performance Analysis**
```sql
-- Find most effective play types
SELECT Play_Type, AVG(Win_Impact) as Avg_Impact
FROM dataset 
GROUP BY Play_Type
ORDER BY Avg_Impact DESC;
```

### **Team Comparison**
```sql
-- Compare team performance by season
SELECT Season, Opponent, COUNT(*) as Total_Plays, 
       SUM(CASE WHEN Outcome = 'Goal' THEN 1 ELSE 0 END) as Goals
FROM dataset 
GROUP BY Season, Opponent
ORDER BY Season DESC, Goals DESC;
```

### **Tactical Trends**
```sql
-- Analyze play speed trends over time
SELECT Season, Play_Speed, COUNT(*) as Count
FROM dataset 
GROUP BY Season, Play_Speed
ORDER BY Season DESC;
```

## 🚀 Getting Started

1. **Open the Web Interface**: Launch `index.html` in your browser
2. **Load the Dataset**: The CSV data is automatically loaded for analysis
3. **Explore Interactive Features**: Use the built-in filters and visualizations
4. **Analyze Patterns**: Focus on xG, Win Impact, and Success rates across different dimensions
5. **Export Results**: Save filtered data or analysis results as needed

## 💻 Technical Implementation

- **Frontend**: Pure HTML, CSS, and JavaScript (no external dependencies)
- **Data Processing**: Client-side CSV parsing and manipulation
- **Visualization**: Custom JavaScript charts and interactive elements
- **Responsive Design**: Works on desktop and mobile browsers
- **Local Storage**: Optional data caching for improved performance

## 📁 File Structure

```
Play2Win/
├── dataset.csv          # Main dataset (10,001 rows)
├── README.md            # This documentation
├── index.html           # Web interface (if applicable)
└── .gitignore           # Git ignore file
```

## 🔧 Technical Notes

- **File Format**: CSV with UTF-8 encoding
- **Delimiter**: Comma-separated values
- **Missing Values**: Empty strings for non-applicable fields
- **Data Types**: Mixed (strings, integers, decimals)
- **File Size**: Approximately 2-3 MB

## 📈 Research Applications

- **Local Sports Analytics**: Performance analysis and pattern recognition
- **JavaScript Learning**: Data manipulation and visualization techniques
- **Interactive Dashboards**: Creating user-friendly data exploration interfaces
- **Tactical Analysis**: Understanding play patterns and effectiveness
- **Statistical Modeling**: Time series analysis and trend detection
- **Data Visualization**: Creating interactive charts and graphs
- **Educational Tool**: Learning data analysis concepts with realistic sports data

## 🤝 Contributing

This dataset is designed for research and educational purposes. If you use this data in your research, please cite appropriately and consider sharing your findings.

## 📄 License

This dataset is provided for educational and research purposes. Please use responsibly and in accordance with your institution's data usage policies.

---

**Generated**: 2024  
**Last Updated**: 2024  
**Dataset Version**: 1.0
