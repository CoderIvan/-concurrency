"""
Python Demo
"""
import httplib
import threading
import urllib

THREAD_NUM = 3


def launch(index):
    """ Launch """
    while(True):
        connection = httplib.HTTPConnection('localhost', 8080)
        params = urllib.urlencode({'interval': '2000'})
        headers = {'Content-type': 'application/x-www-form-urlencoded',
                   'Accept': 'text/plain'}
        connection.request('POST', '/', params, headers)
        response = connection.getresponse()
        print index, response.status, response.reason


def main():
    """ Main """
    for i in range(THREAD_NUM):
        thread = threading.Thread(target=launch, args=(i,))
        thread.start()


if __name__ == '__main__':
    main()
