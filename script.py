import pandas as pd

#csv file name to be read in 

in_csv = 'comments_bitcoins_metareddit_news.csv'

#get the number of lines of the csv file to be read

number_lines = sum(1 for row in (open(in_csv, encoding='utf8')))
print(number_lines)


#size of rows of data to write to the csv, 

#you can change the row size according to your need

rowsize = 500


#start looping through data writing it to a new file for each set
for i in range(1,number_lines,rowsize):
    df = pd.read_csv(in_csv, encoding='utf8',
          nrows = rowsize,#number of rows to read at each loop
          skiprows = i, names = ['','Source','Target','NumberComments','Comments'])#skip rows that have been read
    #csv to write data to a new file with indexed name. input_1.csv etc.
    out_csv = 'comments_bitcoins_metareddit_news' + str(i) + '.csv'

    df.to_csv(out_csv, encoding='utf8',
          header=True,

          mode='a',#append data to csv file

          chunksize=rowsize)#size of data to append for each loop
