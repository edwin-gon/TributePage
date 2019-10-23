import requests
import json
from datetime import datetime

checkConfirm = ['n','no']
tracks = {'title':'',
         'tracks': [],
         'numSongs': 0,
         'totalTime':0,
         'released': 'Dec 12, 2018',
         'yearReleased': 2018,
         'copyright': "℗ 2013 MCDJ Entertainment under exclusive license to Glassnote Entertainment Group LLC, distributed by AWAL",
         'genre': 'Hip-Hop/Rap'}
t = {"name": '',
    "length":''}

def getMatches(query):
    url = 'https://itunes.apple.com/search?term={}'.format(query)
    r = requests.get(url)
    data = r.json()
    
    #Query Lowercase
    qlc = qal.lower()
    q2lc = qar.lower()
    
    for entry in data['results']:
        clc = entry['collectionName']
        alc = entry['artistName']
        
        if clc.lower() == qlc and alc.lower() == q2lc:
            print('The prophesy is true!!!! ')
            print(entry['collectionId'])
            
            return entry['collectionId'] 
    print('\n RESULTS-')
    print(data)

def convertTStoDate(t1):
    t1 = t1.replace('T',' ').replace('Z','')
    d = datetime.strptime(t1, '%Y-%m-%d %H:%M:%S')
    rd = datetime.strftime(d, '%b %d,%Y')
    y = datetime.strftime(d, '%Y')
    
    dates = [rd,y]
    return dates
    
    
def findTracks(id):
    # While loop to check collection name matches the query
   
    url ='https://itunes.apple.com/lookup?id={}&entity=song'.format(id)
    r = requests.get(url)
    data = r.json()
    
    tt = 0

    for track in data['results']:
        if track['collectionId'] == id and track['wrapperType'] == 'track':
            tracks['tracks'].append(track['trackName'])
            tt += track['trackTimeMillis']
        else:
            a = convertTStoDate(track['releaseDate'])
            tracks['numSongs'] = track['trackCount']
            tracks['released'] = a[0]
            tracks['yearReleased'] = a[1]
            tracks['copyright'] = track['copyright']
            tracks['genre'] = track['primaryGenreName']
    
    tracks['totalTime'] = convertMs(tt,2)
    print(tracks)

def convertMs(time, option):
    if option == 1:
        min = (time/60000)%60
        min = int(min)
        sec = (time/1000)%60
        sec = int(sec)
        ntime = min+':'+sec
        return ntime
    else:
        print('Minutes: {}',format(time))
        min = (time/60000)%60
        min = int(min)
        
        return min
    
def runSearch(q):
    id = getMatches(q)
    findTracks(id)
    
def getConfirm():
    clc = confirm.lower()
    
    if clc in checkConfirm:
        return True
    else: 
        return False
# ------------------ INPUT BASED ON USER ---------------------


qal = input('Album to query: \n')
qar = input('\nArtist to query: \n')

confirm = input('\nIs \'{}\' by {} the entry you want to send? (y/n): '.format(qal,qar) + '\n')


while (getConfirm()):
    qal = input('\nAlbum to query: \n')
    qar = input('\nArtist to query: \n')
    confirm = input('\nIs \'{}\' by {} the entry you want to send? (y/n):'.format(qal,qar) + '\n')

try:
    runSearch(qal) 
except:
    print('Sorry please try a different entry.')
    while (getConfirm()):
        qal = input('\nAlbum to query: \n')
        qar = input('\nArtist to query: \n')
        confirm = input('\nIs \'{}\' by {} the entry you want to send? (y/n):'.format(qal,qar) + '\n')


with open('album.json','w') as json_file:
    
    json.dump(tracks,json_file)
